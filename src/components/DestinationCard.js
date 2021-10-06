app.component('destination-card', {
  props: {
    destination: {
      type: Object,
      required: true
    }
  },
  template: 
  /* html */
  `
    <div class="flex items-center rounded-lg bg-white shadow-lg max-w-lg mx-auto my-4 overflow-hidden">
      <img class="w-36 h-36 flex-shrink-0" :src="destination.imageUrl" :alt="imageAlt" />
      <div class="px-8 py-4">
        <h1 class="text-xl font-bold">{{ destination.city }}</h1>
        <p class="mb-6 font-normal">$\{{ destination.averagePrice }} / night average</p>

        <h3 class="text-base font-bold text-brand">Explore {{ destination.propertyCount }} properties</h3>
      </div>
    </div>
  `
})