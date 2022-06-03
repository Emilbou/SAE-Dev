<template>
  <form enctype="multipart/form-data" @submit.prevent="createArtistes">
    <h5 class="font-bree-serif my-5 text-center text-4xl text-white">Création artiste</h5>
    <div>
      <img class="preview img-fluid" :src="imageData" />
      <span class="font-bree-serif mx-10 text-2xl text-white">Nom</span>
    </div>

    <input class="mx-10 mb-10 border-2" placeholder="Nom de la personne" v-model="artistes.nom" required />
    <div>
      <span class="font-bree-serif mx-10 text-2xl text-white">Type</span>
    </div>
    <input class="mx-10 mb-10 border-2" v-model="artistes.type" placeholder="Type Groupe ou Solo" key="required" />
    <div>
      <div>
        <span class="font-bree-serif mx-10 text-2xl text-white">Photo</span>
      </div>
      <div class="custom-file">
        <input type="file" class="custom-file-input mx-10" ref="file" id="file" @change="previewImage" />
        <label class="custom-file-label" for="file">Sélectionner l'image</label>
      </div>
    </div>

    <div>
      <div>
        <span class="font-bree-serif mx-10 text-2xl text-white">Date naissance</span>
      </div>
      <input class="mx-10" type="date" v-model="artistes.naissance" format="dd/mm/yyyy" required />
    </div>

    <div>
      <button class="m-10 border-4 border-pink-300 p-3 text-2xl text-white" type="submit">Créer</button>
      <button>
        <router-link class="m-10 border-4 border-pink-300 p-3 text-2xl text-white" to="/create">Cancel</router-link>
      </button>
    </div>
  </form>
</template>

<script>
// Bibliothèque Firestore : import des fonctions
import {
  getFirestore, // Obtenir le Firestore
  collection, // Utiliser une collection de documents
  doc, // Obtenir un document par son id
  getDocs, // Obtenir la liste des documents d'une collection
  addDoc, // Ajouter un document à une collection
  updateDoc, // Mettre à jour un document dans une collection
  deleteDoc, // Supprimer un document d'une collection
  onSnapshot, // Demander une liste de documents d'une collection, en les synchronisant
  query, // Permet d'effectuer des requêtes sur Firestore
  orderBy, // Permet de demander le tri d'une requête query
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

// Cloud Storage : import des fonctions
import {
  getStorage, // Obtenir le Cloud Storage
  ref, // Pour créer une référence à un fichier à uploader
  getDownloadURL, // Permet de récupérer l'adress complète d'un fichier du Storage
  uploadString, // Permet d'uploader sur le Cloud Storage une image en Base64
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

export default {
  name: "CreateView",
  data() {
    return {
      imageData: null, //image de l'artiste
      artistes: {
        // L'artiste à créer
        nom: null, // son nom
        type: null, // son prénom
        image: null, // sa photo (nom du fichier)
        naissance: null, // sa date de naissance
      },
    };
  },
  mounted() {
    // Montage de la vue
    // Appel de la liste des pays
    this.getArtiste();
  },
  methods: {
    async getArtiste() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document pays
      const dbArtistes = collection(firestore, "artistes");
      // Liste des Artistess triés
      // query permet de faire une requête sur Firebase
      // notement pour filtrer, trier ... des données
      //orderBy permet de préciser sur quel élément trier, et dans quel ordre
      // ici le nom du pays par ordre croissant (asc)
      const q = query(dbArtistes, orderBy("nom", "asc"));
      // Récupération de la liste des pays à partir de la query
      // La liste est synchronisée
      await onSnapshot(q, (snapshot) => {
        this.listeArtistes = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      });
    },

    previewImage: function (event) {
      // Mise à jour de la photo du Artistes
      this.file = this.$refs.file.files[0];
      // Récupérer le nom du fichier pour la photo du Artistes
      this.artistes.image = this.file.name;
      // Reference to the DOM input element
      // Reference du fichier à prévisualiser
      var input = event.target;
      // On s'assure que l'on a au moins un fichier à lire
      if (input.files && input.files[0]) {
        // Creation d'un filereader
        // Pour lire l'image et la convertir en base 64
        var reader = new FileReader();
        // fonction callback appellée lors que le fichier a été chargé
        reader.onload = (e) => {
          // Read image as base64 and set to imageData
          // lecture du fichier pour mettre à jour
          // la prévisualisation
          this.imageData = e.target.result;
        };
        // Demarrage du reader pour la transformer en data URL (format base 64)
        reader.readAsDataURL(input.files[0]);
      }
    },

    async createArtistes() {
      // Obtenir storage Firebase
      const storage = getStorage();
      // Référence de l'image à uploader
      const refStorage = ref(storage, "artistes/" + this.artistes.photo);
      // Upload de l'image sur le Cloud Storage
      await uploadString(refStorage, this.imageData, "data_url").then((snapshot) => {
        console.log("Uploaded a base64 string");

        // Création du Artistes sur le Firestore
        const db = getFirestore();
        const docRef = addDoc(collection(db, "artistes"), this.artistes);
      });
      // redirection sur la liste des Artistes
      this.$router.push("/Accueil");
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bree+Serif&display=swap");

input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
  color: #ffe1fa;
  font-size: 0.875em;
}

input:focus::-webkit-input-placeholder,
textarea:focus::-webkit-input-placeholder {
  color: #ffe1fa;
}

input::-moz-placeholder,
textarea::-moz-placeholder {
  color: #ffe1fa;
  font-size: 0.875em;
}

input:focus::-moz-placeholder,
textarea:focus::-moz-placeholder {
  color: #bbb5af;
}

input::placeholder,
textarea::placeholder {
  color: #aca49c;
  font-size: 0.875em;
}

input:focus::placeholder,
textarea::focus:placeholder {
  color: #bbb5af;
}

input::-ms-placeholder,
textarea::-ms-placeholder {
  color: #ffffff;
  font-size: 0.875em;
}

input:focus::-ms-placeholder,
textarea:focus::-ms-placeholder {
  color: #ffe1fa;
}

input:hover {
  color: black;
}

/* on hover placeholder */

input:hover::-webkit-input-placeholder,
textarea:hover::-webkit-input-placeholder {
  color: #000000;
  font-size: 0.875em;
}

input:hover:focus::-webkit-input-placeholder,
textarea:hover:focus::-webkit-input-placeholder {
  color: #000000;
}

input:hover::-moz-placeholder,
textarea:hover::-moz-placeholder {
  color: #000000;
  font-size: 0.875em;
}

input:hover:focus::-moz-placeholder,
textarea:hover:focus::-moz-placeholder {
  color: #000000;
}

input:hover::placeholder,
textarea:hover::placeholder {
  color: #000000;
  font-size: 0.875em;
}

input:hover:focus::placeholder,
textarea:hover:focus::placeholder {
  color: #000000;
}

input:hover::placeholder,
textarea:hover::placeholder {
  color: #000000;
  font-size: 0.875em;
}

input:hover:focus::-ms-placeholder,
textarea:hover::focus:-ms-placeholder {
  color: #000000;
}

body {
  font-family: "Bree Serif, sans-serif";
  background: #ffe1fa;
  color: #ffe1fa;
}

header {
  position: relative;
  margin: 100px 0 25px 0;
  font-size: 2.3em;
  text-align: center;
  letter-spacing: 7px;
}

#form {
  position: relative;
  width: 500px;
  margin: 50px auto 100px auto;
}

input {
  font-family: "Bree Serif", sans-serif;
  font-size: 0.875em;
  width: 470px;
  height: 50px;
  padding: 0px 15px 0px 15px;

  background: transparent;
  outline: none;
  color: #ffe1fa;

  border: solid 4px #ffe1fa;

  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
}

input:hover {
  background: #ffe1fa;
  color: #000000;
}

textarea {
  width: 470px;
  max-width: 470px;
  height: 110px;
  max-height: 110px;
  padding: 15px;

  background: transparent;
  outline: none;

  color: #ffe1fa;
  font-family: "Bree Serif", sans-serif;

  border: solid 4px #ffe1fa;

  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
}

textarea:hover {
  background: #ffe1fa;
  color: #000000;
}

#submit {
  width: 470px;

  padding: 0;
  margin: -5px 0px 0px 0px;

  font-family: "Bree Serif", sans-serif;
  font-size: 0.875em;
  color: #ffe1fa;

  outline: none;
  cursor: pointer;

  border: solid 4px #ffe1fa;
  border-top: none;
}

#submit:hover {
  color: #000000;
}
</style>