<template>
  <main class="faq">
      
    <h1>Frequesntly Asked Questions</h1>
    <Loading v-if="loading" />
    <div class="error" v-if="error">Can't Load the questions</div>

    <section class="list">
      <article v-for="question of questions" :key="question._id">
        <h2 v-html="question.title"></h2>
        <p v-html="question.content"></p>
      </article>
    </section>
  </main>
</template>

<script>
export default {
    data() {
        return {
            questions: [],
            error: null,
            loading: false,
        };
    },
    async created () {
        this.loading = true
        try {
          this.questions = await this.$fetch('questions')
        } catch (e) {
          this.error = e
        }
        this.loading = false
    },
//   created() {
//     fetch('http://localhost:3000/questions')
//       .then((response) => {
//         if (response.ok) {
//           // Returns a new promise
//           return response.json();
//         } else {
//           return Promise.reject("error");
//         }
//       })
//       .then((result) => {
//         // Success
//         console.log("JSON:", result);
//         this.questions = result
//       })
//       .catch((e) => {
//         // Failure
//         console.error(e);
//         this.error = e
//       });
//   },
};
</script>
