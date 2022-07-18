<template>
  <el-row class="characters-list">
    <el-col class="characters-list__search" :span="23" :sm="20" :lg="15">
      <h2>Characters</h2>
      <el-form>
        <el-input
          v-model="inputSearch"
          placeholder="Search a character"
          :prefix-icon="Search"
        />
        <el-select v-model="inputStatus">
          <el-option label="All" value="" />
          <el-option label="Alive" value="alive" />
          <el-option label="Dead" value="dead" />
          <el-option label="unknow" value="unknow" />
        </el-select>
      </el-form>
    </el-col>
    <el-col :span="23" :sm="20" :lg="15">
      <div class="characters-list__items">
        <div
          class="characters-list__items__item"
          v-for="character in characters"
          :key="character.id"
        >
          <CharacterCard
            :id="character.id"
            :name="character.name"
            :image="character.image"
          />
        </div>
        <div v-if="characters.length === 0">
          There is no one in this universe!
        </div>
      </div>
    </el-col>

    <el-col :span="23" :sm="20" :lg="15">
      <el-pagination
        class="characters-list__pagination"
        :page-size="20"
        layout="prev, pager, next"
        :total="pagination.count"
        v-model:current-page="currentPage"
      />
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { useStore } from "vuex";
import { Search } from "@element-plus/icons-vue";
import CharacterCard from "@/components/Character/CharacterCard.vue";

// Characters
const store = useStore();
const characters = computed(() => store.state.characters);

// Form
const inputSearch = ref("");
const inputStatus = ref("");

// Pagination
const pagination = computed(() => store.state.pagination);
const currentPage = ref(1);
function goBackToFirstPage() {
  currentPage.value = 1;
}

// Update
const options = computed(() => {
  return {
    page: currentPage.value,
    name: inputSearch.value,
    status: inputStatus.value,
  };
});
watch(options, (newValue) => {
  store.dispatch("fetchCharacters", newValue);
});

watch([inputSearch, inputStatus], () => {
  goBackToFirstPage();
});
</script>

<style lang="scss">
.characters-list {
  justify-content: center;
  &__search {
    display: flex;
    justify-content: space-between;
    margin-bottom: 3rem;
    @media #{$sm-and-down} {
      flex-direction: column;
      align-items: center;
    }
    h2 {
      margin: 0;
      @media #{$sm-and-down} {
        margin-bottom: 2rem;
      }
    }
    form {
      display: flex;
      > div {
        &:first-child {
          margin-right: 1rem;
        }
      }
    }
    .select-trigger,
    .el-input {
      height: 100%;
    }
  }
  &__items {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -2rem;
    @media #{$md-and-down} {
      margin: 0 -1rem;
    }
    &__item {
      flex: 0 0 20%;
      padding: 0 2rem;
      margin-bottom: 4rem;
      @media #{$md-and-down} {
        flex: 0 0 33%;
        padding: 0 1rem;
      }
      @media #{$sm-and-down} {
        flex: 0 0 50%;
      }
    }
  }
  &__pagination {
    justify-content: center;
    margin-bottom: 2rem;
    button {
      border-radius: 100%;
    }
    li {
      background: transparent;
      color: white;
    }
  }
}
</style>
