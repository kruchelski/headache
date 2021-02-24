import {
  bgUnwrap,
  bg01,
  bg02,
  bg03,
  bg04,
  bg05,
  bg06
} from '../assets';

const unwrapData = {
  step0: {
    intro: `Alright! Let's start the unwrap`,
    mid: `Just touch the 'Start' button`,
    content: null,
    final: {
      0: `Uhull`,
      1: `Ready?`,
      2: `Don't expect much`
    },
    button: 'Start',
    nextStep: 'step1',
    bgImg: bgUnwrap
  },

  step1: {
    intro: `Let's look at your projects`,
    mid: `OK! Looks like you have`,
    content: [
      {
        id: 0,
        msg: `? projects!`,
        icon: 'laptop'
      },
    ],
    final: {
      0: `That's very cool! Keep going!`,
      1: `Nice!`,
      2: `Hmm... meh.`
    },
    button: 'Next',
    nextStep: 'step2',
    bgImg: bg01
  },

  step2: {
    intro: `Analyzing a random project of yours`,
    mid: `Hmm... What about this?`,
    content: [
      { 
        id: 0,
        msg: `Name: ?`,
        icon: 'code-brackets'
      },
      { 
        id: 1,
        msg: `Last activity: ?`,
        icon: 'calendar'
      }
    ],
    final: {
      0: `This is a cool name!`,
      1: `Looks like it has some activity`,
      2: `This could have a better name and more activity`
    },
    button: 'Next',
    nextStep: 'step3',
    bgImg: bg02
  },

  step3: {
    intro: `Now let's see your groups`,
    mid: `Well, you have`,
    content: [
      {
        id: 0,
        msg: `? groups`,
        icon: 'lightbulb-group'
      },
    ],
    final: {
      0: `This is great`,
      1: `This is fine`,
      2: `Ok... This is... "Ok"`
    },
    button: 'Next',
    nextStep: 'step4',
    bgImg: bg03
  },

  step4: {
    intro: `Checking your recent activity (this is hard)`,
    mid: `About your commits, you have`,
    content: [
      {
        id: 0,
        msg: `? commits (sort of)`,
        icon: 'source-commit'
      },
    ],
    final: {
      0: `Well done`,
      1: `Nice job`,
      2: `I've seen better`
    },
    button: 'Next',
    nextStep: 'step5',
    bgImg: bg04
  },

  step5: {
    intro: `Picking one particular commit`,
    mid: `Let's take a look`,
    content: [
      {
        id: 0,
        msg: `Title: ?`,
        icon: 'source-commit'
      },
      {
        id: 1,
        msg: `Date ?`,
        icon: 'calendar'
      }
    ],
    final: {
      0: `That's a good commit message`,
      1: `Wow, such commit`,
      2: `This message is probably wrong`
    },
    button: 'Next',
    nextStep: 'step6',
    bgImg: bg05
  },

  step6: {
    intro: `So this is it for now`,
    mid: `One day we'll dig deeper into the data`,
    content: [
      {
        id: 0,
        msg: `Headache: GitLab Unwrapped`,
        icon: 'gitlab'
      },
    ],
    final: {
      0: `:-)`,
      1: `It's simple but it's honest work`,
      2: `Bye`
    },
    button: 'Back to home',
    nextStep: 'step1',
    bgImg: bg06
  },
}

export default unwrapData;