import { createGlobalHook } from '@devhammed/use-global-hook';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import moment from 'moment';

const notifications = [
  {
    id: 112,
    datetime: moment(),
    status: 'unread',
    message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, quidem!
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi architecto cupiditate ea facilis iste laboriosam laudantium nemo nobis obcaecati officiis quasi quidem, recusandae reiciendis vel voluptate!
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, eligendi odio. Accusamus!
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi dolores doloribus harum numquam odio optio provident qui, quidem rem similique tempora unde. Atque, exercitationem labore laboriosam molestias officiis sapiente ullam voluptatem?
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dolor est eum harum inventore ipsum officia omnis repudiandae sunt. Alias cum, sequi?
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium architecto aspernatur, consequatur consequuntur ea eos facere illum maxime obcaecati odio quaerat quas quia sunt vel vero voluptate?
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi blanditiis dolore ipsa quod rem ullam voluptatum!`,
  },
  {
    id: 145,
    datetime: moment().add(4.5, 'hours'),
    status: 'read',
    message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, quidem!
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi architecto cupiditate ea facilis iste laboriosam laudantium nemo nobis obcaecati officiis quasi quidem, recusandae reiciendis vel voluptate!
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, eligendi odio. Accusamus!
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi dolores doloribus harum numquam odio optio provident qui, quidem rem similique tempora unde. Atque, exercitationem labore laboriosam molestias officiis sapiente ullam voluptatem?
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dolor est eum harum inventore ipsum officia omnis repudiandae sunt. Alias cum, sequi?
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium architecto aspernatur, consequatur consequuntur ea eos facere illum maxime obcaecati odio quaerat quas quia sunt vel vero voluptate?
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi blanditiis dolore ipsa quod rem ullam voluptatum!`,
  },
  {
    id: 147,
    datetime: moment().add(12, 'hours'),
    status: 'unread',
    message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, quidem!
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi architecto cupiditate ea facilis iste laboriosam laudantium nemo nobis obcaecati officiis quasi quidem, recusandae reiciendis vel voluptate!
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, eligendi odio. Accusamus!
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi dolores doloribus harum numquam odio optio provident qui, quidem rem similique tempora unde. Atque, exercitationem labore laboriosam molestias officiis sapiente ullam voluptatem?
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dolor est eum harum inventore ipsum officia omnis repudiandae sunt. Alias cum, sequi?
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium architecto aspernatur, consequatur consequuntur ea eos facere illum maxime obcaecati odio quaerat quas quia sunt vel vero voluptate?
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi blanditiis dolore ipsa quod rem ullam voluptatum!`,
  },
  {
    id: 384,
    datetime: moment().add(26, 'hours'),
    status: 'unread',
    message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, quidem!
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi architecto cupiditate ea facilis iste laboriosam laudantium nemo nobis obcaecati officiis quasi quidem, recusandae reiciendis vel voluptate!
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, eligendi odio. Accusamus!
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi dolores doloribus harum numquam odio optio provident qui, quidem rem similique tempora unde. Atque, exercitationem labore laboriosam molestias officiis sapiente ullam voluptatem?
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dolor est eum harum inventore ipsum officia omnis repudiandae sunt. Alias cum, sequi?
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium architecto aspernatur, consequatur consequuntur ea eos facere illum maxime obcaecati odio quaerat quas quia sunt vel vero voluptate?
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi blanditiis dolore ipsa quod rem ullam voluptatum!`,
  },
  {
    id: 183,
    datetime: moment().add(45, 'hours'),
    status: 'read',
    message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, quidem!
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi architecto cupiditate ea facilis iste laboriosam laudantium nemo nobis obcaecati officiis quasi quidem, recusandae reiciendis vel voluptate!
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, eligendi odio. Accusamus!
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi dolores doloribus harum numquam odio optio provident qui, quidem rem similique tempora unde. Atque, exercitationem labore laboriosam molestias officiis sapiente ullam voluptatem?
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dolor est eum harum inventore ipsum officia omnis repudiandae sunt. Alias cum, sequi?
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium architecto aspernatur, consequatur consequuntur ea eos facere illum maxime obcaecati odio quaerat quas quia sunt vel vero voluptate?
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi blanditiis dolore ipsa quod rem ullam voluptatum!`,
  },
  {
    id: 103,
    datetime: moment().add(75, 'hours'),
    status: 'unread',
    message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, quidem!
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi architecto cupiditate ea facilis iste laboriosam laudantium nemo nobis obcaecati officiis quasi quidem, recusandae reiciendis vel voluptate!
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, eligendi odio. Accusamus!
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi dolores doloribus harum numquam odio optio provident qui, quidem rem similique tempora unde. Atque, exercitationem labore laboriosam molestias officiis sapiente ullam voluptatem?
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dolor est eum harum inventore ipsum officia omnis repudiandae sunt. Alias cum, sequi?
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium architecto aspernatur, consequatur consequuntur ea eos facere illum maxime obcaecati odio quaerat quas quia sunt vel vero voluptate?
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi blanditiis dolore ipsa quod rem ullam voluptatum!`,
  },
];

export const notificationItemStore = createGlobalHook(
  'notificationItemStore',
  () => {
    const [state, setState] = useState([...notifications]);
    const readNotification = (id) =>
      setState([
        ...state.map((ite, index) =>
          ite.id === id ? { ...ite, status: 'read' } : ite,
        ),
      ]);

    return { state, readNotification };
  },
);
