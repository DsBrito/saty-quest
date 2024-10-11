<template>
  <div class="attributes-container">
    <table class="attributes-table">
      <tbody>
        <tr v-for="attribute in attributes" :key="attribute.name">
          <td>
            <strong>{{ attribute.name }}</strong>
          </td>
          <td>
            <ul>
              <li v-for="(effect, index) in attribute.effects" :key="index">
                {{ effect }}
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'AttributesTable',
  data() {
    return {
      attributes: [
        { name: 'STR', effects: ['1.3 Attack Power'] },
        {
          name: 'DEX',
          effects: [
            '0.2 Attack Power',
            '5 SP',
            'Increases Accuracy',
            'Increases Evasion',
          ],
        },
        { name: 'REC', effects: ['5 HP', '1 Defense'] },
        { name: 'INT', effects: ['1.5 Magic Attack power'] },
        {
          name: 'WIS',
          effects: [
            '1.3 Magic Attack power',
            '5 MP',
            'Increases Magic Accuracy',
            'Increases Stamina',
            'Increases Magic Evasion',
          ],
        },
        {
          name: 'LUC',
          effects: [
            '0.6 Attack power for Hunter/Archer only',
            'Increases Critical Chance',
            'Increases Critical Damage',
            'Increases Critical Evasion',
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.attributes-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.attributes-table {
  width: 80%;
  text-align: left;
}

.attributes-table td {
  padding: 2px;
  text-align: center;
  border: 1px solid #000000;
}
.attributes-table li {
  font-size: 12.5px;
}
/* .attributes-table strong {
  font-size: 14px;
} */

/* .attributes-table th {
  background-color: #f2f2f2;
} */

/* .attributes-table tr:nth-child(even) {
  background-color: #f9f9f9;
} */

.attributes-table ul {
  list-style-type: none; /* Remove bullets from list */
  padding: 0; /* Remove padding */
  margin: 0; /* Remove margin */
}
</style>
