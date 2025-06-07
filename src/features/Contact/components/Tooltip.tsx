import { WarningCircle } from 'phosphor-react';
import type { TFunction } from 'i18next';
import styles from '@/features/Contact/styles/Tooltip.module.css';

interface TooltipProps {
  label: string;
  t: TFunction;
}

/**
 * Tooltip component used to display validation hints.
 */
const Tooltip = ({ label, t }: TooltipProps) => (
  <div className={styles.tooltipBox}>
    <div className={styles.tooltipArrow} />
    <WarningCircle size={20} color="#faad14" weight="fill" className="flex-shrink-0 z-[12]" />
    <span className={styles.tooltipText}>
      <b>{label}</b> {label && ' '}{t('contact.form.mustBeFilled')}
    </span>
  </div>
);

export default Tooltip; 