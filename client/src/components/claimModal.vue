<template>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Cargá tu reclamo</p>
      <button
        type="button"
        class="delete"
        @click='closeModal()'/>
    </header>
    <section class="modal-card-body">
      <b-field label="Título del reclamo">
        <b-input
          type="text"
          v-model='claimTitle'
          required
          style='height: 50px !important;'>
        </b-input>
      </b-field>
      <b-field label="Comuna">
        <b-input
          type="text"
          v-model='communeName'
          required
          disabled>
        </b-input>
      </b-field>
      <b-field label="Barrio">
        <b-select placeholder="Seleccioná tu barrio"
          v-model='communeAreaSelected'>
          <option
            v-for="(communeArea, index) in communeAreas"
            :key="communeArea.id+'id'+index"
            >
            {{ communeArea }}
          </option>
        </b-select>
    </b-field>
      <b-field label="Descripción">
        <b-input
          maxlength="200" 
          type="textarea"
          v-model='claimDescription'
          required></b-input>
      </b-field>
      <b-field class="file">
        <b-upload v-model="imageUploaded" expanded multiple>
          <a class="button is-colored-button is-fullwidth">
            <i class="fas fa-upload" style='color: white; position: relative; left: -1vh;'></i>
            <span class='image-text'>{{ imageUploaded.name || "Ingresá la imagen del reclamo"}}</span>
          </a>
        </b-upload>
      </b-field>
      <div class='tags'>
        <span class='tag' v-for="(imageUploaded, index) in imageUploaded" :key="index">
          {{imageUploaded.name}}
          <button class="delete is-small is-colored-button" type="button" @click="deleteDropFile(index)"></button>
        </span>
      </div>
    </section>
    <footer class="modal-card-foot">
      <button class="button" type="button" @click='closeModal()'>Cerrar</button>
      <button class="button is-primary is-colored-button" @click='saveClaim()'>Enviar</button>
    </footer>
  </div>
</template>

<script>
import Vuex from 'vuex';

export default {
  name: 'Modal',
  data() {
    return {
      claimTitle: '',
      image: '',
      claimDescription: '',
      imageUploaded: [],
      isComponentModalActive: true,
      communeAreaSelected: '',
    };
  },
  computed: {
    ...Vuex.mapState(['newClaim', 'communeName', 'communeArea']),
    communeAreas() {
      return this.communeArea.split(', ');
    }
  },
  methods: {
    ...Vuex.mapActions(['insertClaim']),
    saveClaim() {
      if (this.claimTitle !== '' && this.claimDescription !== '' && this.communeAreaSelected !== '' && this.imageUploaded.length !== 0) {
        // Método que guarda  el reclamo. El objeto que se pasa como parámetro son los key que me pide el backend para hacer el guardado de datos. insertClaim es el método que hace la petición al backend.
        this.insertClaim({
          title: this.claimTitle,
          description: this.claimDescription,
          date: '',
          time: '',
          image: this.image,
          postId: this.$route.params.id,
          id: '',
          area: this.communeAreaSelected,
        });
        this.$buefy.dialog.alert({
          title: 'Reclamo procesado',
          message: 'Gracias! Tu reclamo ha sido registrado correctamente.',
          confirmText: 'Cerrar',
          type: 'is-success',
         });
        this.$parent.close();
      } else {
        this.$buefy.dialog.alert({
          title: 'Completar campos.',
          message: 'Te falta completar algún campo. Por favor, revísalo.',
          type: 'is-danger',
          hasIcon: true,
          icon: 'times-circle',
          iconPack: 'fa',
          ariaRole: 'alertdialog',
          ariaModal: true,
          size: 'is-small',
        })
      }
    },
    closeModal() {
      this.$parent.close();
    },
    deleteDropFile(index) {
      this.imageUploaded.splice(index, 1);
    }
  }
}
</script>

<style>

@media (max-width: 600px) {
  .modal-card {
    width: 350px !important;
  }
}

input {
  height: 0;
}

.input {
  height: 40px !important;
}
.is-colored-button,
.tag {
  background-color: #7957d5 !important;
}

.image-text {
  color: #fff;
}

.tag {
  color: #fff !important;
  background-color: #7957d5 !important;
}

.modal-background::after {
  content: 'X',
}
</style>
