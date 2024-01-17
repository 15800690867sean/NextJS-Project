import React from 'react'

interface IProps {
    userId: string;
}

interface IContext {
    params: Record<string, any>;
}

export default function UserIdPage(props: IProps) {
  return (
    <div>UserId: {props.userId}</div>
  )
}

export async function getServerSideProps(context: IContext) {
    const { params } = context;

    const userId = params.uid;

    return {
        props: {
            userId,
        }
    }
}
