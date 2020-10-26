<template>
  <b-modal 
    v-model="isComponentModalActive"
    has-modal-card
    trap-focus
    :destroy-on-hide="false"
    aria-role="dialog"
    aria-modal>
    <form action="">
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
              v-model='title'
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
          <b-field label="Simple">
            <b-select placeholder="Seleccioná tu barrio">
              <option
                v-for="(commune, index) in communeAreas"
                :key="index">
                {{ commune }}
              </option>
            </b-select>
        </b-field>
          <b-field label="Descripción">
            <b-input
              maxlength="200" 
              type="textarea"
              v-model='communeDescription'
              required></b-input>
          </b-field>
          <b-field class="file">
            <b-upload v-model="file" expanded multiple>
              <a class="button is-primary is-fullwidth">
                <b-icon icon="upload"></b-icon>
                <span>{{ file.name || "Ingresá la imagen del reclamo"}}</span>
              </a>
            </b-upload>
          </b-field>
          <div class='tags'>
            <span v-for="(file, index) in file" :key="index" class="tag is-primary">
              {{file.name}}
              <button class="delete is-small" type="button" @click="deleteDropFile(index)"></button>
            </span>
          </div>
        </section>
        <footer class="modal-card-foot">
          <button class="button" type="button" @click='closeModal()'>Cerrar</button>
          <button class="button is-primary" @click='saveClaim()'>Enviar</button>
        </footer>
      </div>
    </form>
  </b-modal>
</template>

<script>
import Vuex from 'vuex';

export default {
  name: 'Modal',
  data() {
    return {
      title: '',
      image: '',
      communeDescription: '',
      file: [],
      dropFiles: [],
      data: []
    }
  },
  props: {
    isComponentModalActive: { type: Boolean, required: false, default: false },
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
      // Método que guarda  el reclamo. El objeto que se pasa como parámetro son los key que me pide el backend para hacer el guardado de datos. insertClaim es el método que hace la petición al backend.
      this.insertClaim({
        title: this.title,
        description: this.communeDescription,
        date: '',
        time: '',
        image: this.image,
        postId: this.$route.params.id,
        id: ''
      });
    },
    closeModal() {
      this.isComponentModalActive = false;
    },
    deleteDropFile(index) {
      this.file.splice(index, 1);
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
.button .is-primary {
  background-color: #7957d5;
}
</style>
