<template>
  <div>
    <!-- <h2 class="table-title">Links Table</h2> -->
    <div v-for="(link, index) in props.links" :key="index">
      <div class="tables-container">
        <div class="table-wrapper" v-if="link.linkTitle1">
          <h3 class="link-title">{{ link.linkTitle1 }}</h3>
          <table class="styled-table">
            <!-- <thead>
              <tr>
                <th>Part</th>
                <th>Lapis</th>
              </tr>
            </thead> -->
            <tbody>
              <tr
                v-for="([part, lapis], index) in Object.entries(
                  link.linkLapis1
                ).filter(([key]) => key !== 'id')"
                :key="index"
              >
                <td>
                  <strong>{{ part }}</strong>
                </td>
                <td>
                  <ul class="lapis-list">
                    <li v-for="(lapisItem, index) in lapis" :key="index">
                      {{ lapisItem }}
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="table-wrapper" v-if="link.linkTitle2">
          <h3 class="link-title">{{ link.linkTitle2 }}</h3>
          <table class="styled-table">
            <!-- <thead>
              <tr>
                <th>Part</th>
                <th>Lapis</th>
              </tr>
            </thead> -->
            <tbody>
              <tr
                v-for="([part, lapis], index) in Object.entries(
                  link.linkLapis2
                ).filter(([key]) => key !== 'id')"
                :key="index"
              >
                <td>
                  <strong>{{ part }}</strong>
                </td>
                <td>
                  <ul class="lapis-list">
                    <li v-for="(lapisItem, index) in lapis" :key="index">
                      {{ lapisItem }}
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  links: {
    linkTitle1: string;
    linkLapis1: {
      id: number;
      helm: string[];
      armor: string[];
      gloves: string[];
      legs: string[];
      boots: string[];
      shield: string[];
    };
    linkTitle2: string;
    linkLapis2: {
      id: number;
      helm: string[];
      armor: string[];
      gloves: string[];
      legs: string[];
      boots: string[];
      shield: string[];
    };
  }[];
}>();
</script>

<style scoped>
.table-title {
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
}

.link-title {
  /* margin-top: 20px; */

  font-size: 20px;
  color: #444;
}

.tables-container {
  display: flex;
  justify-content: center;

  /* margin-bottom: 40px; */
}
.lapis-list {
  background-color: rgb(196, 240, 240);
  list-style-type: none; /* Remove os marcadores */
  padding: 0; /* Remove o preenchimento padrão */
  margin: 0; /* Remove a margem padrão */
}

.table-wrapper {
  flex: 1;

  /* margin: 0 10px; */
  max-width: 400px;
  /* background: #fff; */
  border-radius: 8px;
  /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); */
  overflow: hidden;
}

/* .styled-table {
  width: 100%;
  border-collapse: collapse;
} */

.styled-table th,
.styled-table td {
  padding: 2px;
  text-align: center;
  /* background-color: #f9f9f9; */
  border: 1px solid #000000;
}

/* .styled-table thead {
  background-color: #f2f2f2;
} */

/* .styled-table tbody tr:nth-child(even) {
  background-color: #f9f9f9;
} */

/* .lapis-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
} */
/*
.attributes-container {
  display: flex;
  flex-direction: column;
  align-items: center;
} */

/* .attributes-table {
  width: 80%;
  text-align: left;
} */

/* .attributes-table td {
  padding: 2px;
  text-align: center;
  border: 1px solid #000000;
} */
</style>
