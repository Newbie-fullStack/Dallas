import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Check } from 'lucide-react';
import toast from 'react-hot-toast';
import { newsletterData } from '../data/mockData';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setSending(true);
    try {
      await newsletterData.subscribe({ email });
      setDone(true);
      toast.success('Bienvenue chez Dalas!');
      setTimeout(() => { setDone(false); setEmail(''); }, 3000);
    } catch {
      toast.error('Une erreur est survenue. Réessayez.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-white">
      <div className="container-x">
        <div className="block-section text-center relative overflow-hidden">
          <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-secondary/5 blur-3xl" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative max-w-lg mx-auto"
          >
            <span className="eyebrow">Newsletter</span>
            <h2 className="h-section mt-3">Recevez nos inspirations</h2>
            <p className="text-muted mt-4 font-ui leading-relaxed">
              Nouveautés du menu, événements exclusifs, et moments de vie Dalas.
            </p>

            <form onSubmit={submit} className="mt-8 flex items-center gap-2 max-w-md mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votre@email.com"
                className="input-base flex-1"
                aria-label="Email"
              />
              <button
                type="submit"
                disabled={sending || done}
                className="btn-primary shrink-0"
              >
                {done ? <Check className="w-4 h-4" /> : <Send className="w-4 h-4" />}
                <span className="hidden sm:inline">{done ? 'Merci!' : 'S\'inscrire'}</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
