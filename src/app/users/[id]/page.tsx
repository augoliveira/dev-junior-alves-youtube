import { unstable_cache } from 'next/cache';
import Link from 'next/link';

import { getUsers } from '@/services';

export default async function User({ params }: { params: { id: string } }) {
  console.log(params);

  const cache = unstable_cache(getUsers, ['user']);

  const users = await cache();

  return (
    <>
      <h2>User</h2>

      {users.results.map((user) => (
        <p key={user.phone}>{user.name.first}</p>
      ))}
      <br />
      <Link href="/products">products</Link>
    </>
  );
}
