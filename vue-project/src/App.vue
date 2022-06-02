<script>
export default {
    data() {
        return {
            "message": 'hello',
            "testClass": 'testClassValue',
            count: 0,
        }
    },
    methods: {
        increment() {
            this.count++;
        }
    }
}
</script>

<template>
    <div class="todo-wrapper">
        <header>
            <img alt="Vue logo" class="logo" src="@/assets/logo.svg"/>
            <!--            <HelloWorld msg="You did it!"/>-->
            <nav>
                <!-- <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink> -->
                <h1>TODO list</h1>
            </nav>
        </header>
        <div class="add">
            <input type="text" placeholder="input here!" class="add__input"/>
            <p class="count">{{ count || 0 }}</p>
            <button class="add__button2" @click="count++">add</button>
            <p>{{ message.split('').join(' ') }}</p>
            <p class="testClassValue">testClassValue</p>
        </div>
    </div>
    <!-- <RouterView /> -->
</template>

<style lang="scss">
.testClassValue {
    color: red;
    transform: translateY(15px);
}

.todo-wrapper {
    width: 100%;
    color: black;

    & * {
        box-sizing: border-box;
    }
}

header {
    padding: 20px;
    max-width: 1400px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;

    img {
        width: 50px;
        height: 50px;
    }

    .wrapper {
        width: 500px;
    }
}

.add {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100px;
    justify-content: center;
    gap: 20px;

    .add__input {
        width: 30%;
        height: 30px;
        padding: 0;
        margin: 0;

    }

    .add__button {
        width: 100px;
        height: 30px;
        background: transparent;
    }
}
</style>
