import weightTrackerImg from '../assets/img/weight-tracker.png'
import twentyFortyEightCloneImg from '../assets/img/2048-clone.png'
import adminDBImg from '@/assets/img/admin dashboard.png'

const projectData = {
    weightTracker: {
        img: weightTrackerImg,
        name: "Weight Tracker",
        link: "https://helpful-pavlova-8e2700.netlify.app",
        description: "I recently got really into fitness and started to track my weight on my notes app. At the end of every week I would sum up all my weigh-ins and get an average for the week, that way I could get a better view of whether I was gaining or losing weight. I made this app to spare me the pain of having to do all that and added a graph using Chart.js.",
        descriptionPT: "Recentemente eu comecei a frequentar a academia e anotar meu peso diariamente nas Notas do celular.No final de toda semana eu calculava a média do meu peso, assim eu conseguia ver melhor se estava ganhando ou perdendo peso. Fiz esse site para me poupar a dor de ter que fazer isso semanalmente. E adicionei um gráfico usando Chart.js.",
        id: 0
    },
    '2048Clone': {
        img: twentyFortyEightCloneImg,
        name: '2048 Clone',
        link: 'https://2048-clone-henna.vercel.app',
        description: "Ever since it got released back in 2014, I've wanted to try my hand at making a clone of this game. Finally, I did it and it was a lot harder than I imagined. Especially because I'd never used TailwindCSS before, but it was a good learning experience.",
        descriptionPT: "Desde que foi lançado em 2014, eu tive a vontade de tentar fazer um clone desse jogo. Finalmente, eu fiz e foi mais difícil do que imaginava. Ainda mais porque eu nunca havia usado TailwindCSS antes, mas foi uma ótima experiência de aprendizado.",
        id: 1
    },
    adminDashboard: {
        img: adminDBImg,
        name: 'Admin Dashboard',
        link: 'https://portfolio-admin-dashboard-one.vercel.app',
        description: "This is a simple fullstack admin dashboard I made, using Next.js, shadcn-ui, TypeScript, Tailwind, Prisma, and a lot more. This is a simplified version of a project I'm developing in college that I can't yet share here.",
        descriptionPT: "Esse é um painel de administrador fullstack que eu fiz usando Next.js, shadcn-ui, TypeScript, Tailwind, Prisma, e muito mais. Essa é uma versão simplificada de um projeto que estou desenvolvendo na faculdade, mas que ainda não posso compartilhar aqui.",
        id: 2
    }
}

export default projectData