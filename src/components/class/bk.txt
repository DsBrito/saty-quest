<template>
  <div
    v-for="videoType in videos.video"
    :key="videoType.type"
    class="video-type-section"
  >
    <h3>{{ videoType.type }}</h3>
    <div class="video-list">
      <q-item
        v-for="link in videoType.links"
        :key="link.link"
        clickable
        @click="openVideo(link.link)"
        class="video-item"
      >
        <q-img :src="link.tumb" :alt="link.name" class="video-thumbnail" />
        <div class="video-name">{{ link.name }}</div>
      </q-item>
    </div>
  </div>

  <!-- Video Modal -->
  <q-dialog v-model="dialog" persistent>
    <q-card>
      <q-card-section>
        <q-btn @click="closeDialog" label="Close" />
        <iframe
          v-if="videoUrl"
          width="560"
          height="315"
          :src="videoUrl"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: 'ClassVideo',
  props: {
    videos: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      dialog: false,
      videoUrl: '',
    };
  },
  methods: {
    openVideo(link) {
      const videoId = this.extractVideoId(link); // Extrai o ID do vídeo
      if (videoId) {
        this.videoUrl = `https://www.youtube.com/embed/${videoId}`; // URL de incorporação
      }
      this.dialog = true; // Abre o diálogo
    },
    closeDialog() {
      this.videoUrl = ''; // Limpa o link do vídeo ao fechar
      this.dialog = false; // Fecha o diálogo
    },
    extractVideoId(link) {
      const match = link.match(
        /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
      );
      return match ? match[1] : null; // Retorna o ID do vídeo se encontrado
    },
  },
};
</script>

<style scoped>
.video-type-section {
  margin-bottom: 20px;
}

.video-list {
  display: flex; /* Alinha os itens na horizontal */
  justify-content: center; /* Centraliza os itens horizontalmente */
  gap: 10px; /* Espaçamento entre os vídeos */
  overflow-x: auto; /* Adiciona rolagem horizontal se necessário */
  padding: 10px 0; /* Espaçamento superior e inferior */
}

.video-item {
  cursor: pointer; /* Indica que é clicável */
  display: flex; /* Alinha a imagem e o texto */
  align-items: center; /* Centraliza verticalmente */
  border: 1px solid #ccc; /* Borda opcional para cada item */
  border-radius: 8px; /* Arredondar as bordas */
  padding: 5px; /* Espaçamento interno */
  transition: background-color 0.3s; /* Transição suave ao passar o mouse */
}

.video-item:hover {
  background-color: #f0f0f0; /* Cor de fundo ao passar o mouse */
}

.video-thumbnail {
  width: 100px; /* Ajuste conforme necessário */
  height: 75px; /* Ajuste conforme necessário */
  margin-right: 10px;
  border-radius: 5px; /* Arredondar as bordas da miniatura */
}

.video-name {
  display: inline-block; /* Permite que o texto fique ao lado da imagem */
  font-weight: bold; /* Destaca o nome do vídeo */
}
</style>
