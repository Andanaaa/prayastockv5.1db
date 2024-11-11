import { useState, useEffect } from 'react';
import { db } from '../lib/firebase';
import { collection, getDocs, limit, query } from 'firebase/firestore';

export function useFirebaseConnection() {
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    async function checkConnection() {
      try {
        const q = query(collection(db, 'items'), limit(1));
        await getDocs(q);
        setIsConnected(true);
        setError(null);
      } catch (err) {
        setIsConnected(false);
        setError('Tidak dapat terhubung ke database. Periksa koneksi internet Anda atau hubungi administrator.');
      } finally {
        setChecking(false);
      }
    }

    checkConnection();
  }, []);

  return { isConnected, error, checking };
}