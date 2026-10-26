import { FormEvent, useEffect, useRef, useState } from "react";
import "./CadastroModal.css";

type CadastroModalProps = { onClose: () => void };

export default function CadastroModal({ onClose }: CadastroModalProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [feedback, setFeedback] = useState("");
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "Tab") {
        const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
          'button:not([disabled]), input:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
        );
        if (!focusable?.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKeyDown);
    dialogRef.current?.querySelector<HTMLElement>("button")?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const senha = String(data.get("senha") ?? "");
    const confirmar = String(data.get("confirmarSenha") ?? "");
    if (senha !== confirmar) {
      setFeedback("As senhas precisam ser iguais.");
      return;
    }
    setFeedback("Cadastro visual validado! O envio será habilitado quando conectarmos o backend.");
  }

  return (
    <div className="valora-modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <div className="valora-cadastro-modal" role="dialog" aria-modal="true" aria-labelledby="valora-cadastro-title" ref={dialogRef}>
        <button type="button" className="valora-modal-close" aria-label="Fechar cadastro" onClick={onClose}>×</button>
        <div className="valora-cadastro-brand"><img src="/logo-certo-1@2x.png" alt="" /> <span>Valora</span></div>
        <div className="valora-cadastro-heading">
          <p className="valora-cadastro-kicker">COMECE SUA JORNADA</p>
          <h2 id="valora-cadastro-title">Crie sua conta</h2>
          <p>Seu dinheiro, seus planos. Tudo em um só lugar.</p>
        </div>
        <form className="valora-cadastro-form" onSubmit={handleSubmit}>
          <label>Nome completo<input name="nome" placeholder="Digite seu nome completo" autoComplete="name" required /></label>
          <label>E-mail<input name="email" type="email" placeholder="seuemail@exemplo.com" autoComplete="email" required /></label>
          <div className="valora-cadastro-row">
            <label>CPF<input name="cpf" placeholder="000.000.000-00" inputMode="numeric" maxLength={11} onChange={(e) => { e.target.value = e.target.value.replace(/\D/g, "").slice(0, 11); }} required /></label>
            <label>Data de nascimento<input name="nascimento" type="date" autoComplete="bday" required /></label>
          </div>
          <label>Senha
            <div className="valora-cadastro-password"><input name="senha" type={showPassword ? "text" : "password"} placeholder="Crie uma senha" autoComplete="new-password" minLength={8} required /><button type="button" onClick={() => setShowPassword(v => !v)}>{showPassword ? "Ocultar" : "Mostrar"}</button></div>
          </label>
          <label>Confirmar senha<input name="confirmarSenha" type="password" placeholder="Repita sua senha" autoComplete="new-password" minLength={8} required /></label>
          {feedback && <p className="valora-cadastro-feedback" role="status">{feedback}</p>}
          <button type="submit" className="valora-cadastro-submit">Criar minha conta <span aria-hidden="true">→</span></button>
        </form>
        <p className="valora-cadastro-footer">Já tem uma conta? <button type="button" onClick={onClose}>Entrar</button></p>
      </div>
    </div>
  );
}
