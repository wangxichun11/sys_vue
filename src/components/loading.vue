<template lang="jade">
    <div>
    .loading(v-show="loading")
            .load-content
                .c1
                .c2
                .c3
                .c4
            span loading
    </div>
</template>
<script>
export default {
  name: "loading",
  data() {
    return {
      loading: true
    };
  }
};
</script>
<style>
.loading {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  left: 0;
  top: 0;
}
.loading .load-content {
  width: 0.6rem;
  height: 0.6rem;
  position: absolute;
  left: 50%;
  margin-left: -0.3rem;
  top: 50%;
  margin-top: -0.3rem;
}
.loading .load-content div {
  content: "";
  position: absolute;
  width: 0.16rem;
  height: 0.16rem;
  background: #ff8c00;
  top: 0.1rem;
  left: 0.1rem;
  transform-origin: 0.2rem 0.2rem;
  border-radius: 0.08rem;
  animation: spin-a 2s infinite cubic-bezier(0.5, 0, 0.5, 1);
}
.loading .load-content .c2 {
  top: 0.1rem;
  left: auto;
  right: 0.1rem;
  transform-origin: -0.04rem 0.2rem;
  animation: spin-b 2s infinite cubic-bezier(0.5, 0, 0.5, 1);
}
.loading .load-content .c3 {
  top: auto;
  left: auto;
  right: 0.1rem;
  bottom: 0.1rem;
  transform-origin: -0.04rem -0.04rem;
  animation: spin-c 2s infinite cubic-bezier(0.5, 0, 0.5, 1);
}
.loading .load-content .c4 {
  top: auto;
  bottom: 0.1rem;
  transform-origin: 0.2rem -0.04rem;
  animation: spin-d 2s infinite cubic-bezier(0.5, 0, 0.5, 1);
}
@keyframes spin-a {
  0% {
    transform: rotate(90deg);
  }
  0% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes spin-b {
  0% {
    transform: rotate(90deg);
  }
  25% {
    transform: rotate(90deg);
  }
  25% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes spin-c {
  0% {
    transform: rotate(90deg);
  }
  25% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(180deg);
  }
  50% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes spin-d {
  0% {
    transform: rotate(90deg);
  }
  25% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(270deg);
  }
  75% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.loading span {
  width: 1rem;
  height: 0.3rem;
  position: absolute;
  left: 50%;
  margin-left: -0.5rem;
  top: 50%;
  margin-top: 0.3rem;
  color: #ff8c00;
  font-size: 0.12rem;
  text-align: center;
}
</style>