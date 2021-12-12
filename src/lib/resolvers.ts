import { QueryResolvers, MutationResolvers } from './gql/type-defs.graphqls'
import { ResolverContext } from './apollo'

let count = 0;
let postCounter = 0;
const userProfile = {
  id: String(1),
  name: 'John Smith',
  status: 'cached',
}

const postProfile = {
  id: String(1),
  title: 'My new blog',
  slug: 'my_new_blog',
  desc: 'This is a description'
}

const sleep = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}
sleep(1);



const Query: Required<QueryResolvers<ResolverContext>> = {
  async viewer(_parent, _args, _context, _info) {
    // await sleep(2000);
    console.log(count++);


    // throw ({ 'hehe': 'haha' });
    userProfile.name = userProfile.name + ' - 1234'
    return userProfile
  },
  async post(_parent, _args, _context, _info) {
    // await sleep(2000);
    console.log('PostCounter : ', postCounter++);

    return postProfile;
  },
  async news(_parent, _args, _context, _info) {
    // await sleep(2000);
    console.log('PostCounter : ', postCounter++);

    return postProfile;
  }
}

const Mutation: Required<MutationResolvers<ResolverContext>> = {
  updateName(_parent, _args, _context, _info) {
    console.log(_args.name);

    userProfile.name = _args.name
    return userProfile
  },
  updatePost(_parent, _args, _context, _info) {
    return postProfile
  }
}

export default { Query, Mutation }
