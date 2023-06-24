<!-- To get working -->

<script>

import { onMounted } from 'vue';
import Typed from 'typed.js';

onMounted(() => {
    var typed = new Typed('#typed-text', {
    strings: ["Bioinformatician/System Developer."],
    typeSpeed: 100,
    backSpeed: 10,
    loop: false
    });
})

</script>

<template>
    <div id="typed-text"></div>
</template>