import React, { useEffect, useState } from 'react';

export default function PrivatePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const identity = window.netlifyIdentity;
    identity?.on('init', user => {
      if (!user) identity?.open();
      else setUser(user);
    });
    identity?.init();
  }, []);

  if (!user) return <p>Authenticating...</p>;

  return (
    <div style={{ padding: 20 }}>
      <h1>Bienvenue, {user.user_metadata.full_name || user.email}</h1>
      <p>Voici ton plan d'entraînement personnalisé :</p>
      <ul>
        <li><a href="/docs/echap_belle_42k">Plan Ultra 96 km</a></li>
        <li><a href="/docs/plan_ultra_trail_63k">Plan Trail 42 km</a></li>
      </ul>
    </div>
  );
}
