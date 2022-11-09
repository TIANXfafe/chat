import React, {useEffect, useRef, useState} from 'react';
import styles from './index.module.less';

interface InputProps {
  /**
   * 输入框内容
   */
  defaultValue?: string | number;
  /**
   * 输入框类型
   */
  type?: string;
  /**
   * label描述文字
   */
  label?: string;
  /**
   * 错误信息
   */
  error?: string;
  name?: string;
  onChange?: (e: any) => void;
}

const Index = ({
  defaultValue="",
  type="text",
  label="",
  error="",
  name="",
  onChange
}: InputProps) => {
  const [beforeStyle, setBeforeStyle] = useState({});

  const inputRef = useRef<HTMLInputElement | null>(null);

  /**
   * 获得焦点事件
   */
  const handleFocus = () => {
    setBeforeStyle({top: '-10px', left: '8px'})
  }
  /**
   * 失去焦点事件
   */
  const handleBlur = () => {
    if (!inputRef.current?.value.trim()) {
      setBeforeStyle({top: '9px', left: '20px'});
    }
  }

  useEffect(() => {
    if (defaultValue.toString().trim()) {
      setBeforeStyle({top: '-10px', left: '8px'})
    } else {
      setBeforeStyle({top: '9px', left: '20px'});
    }
  }, [])


  return (
    <div className={styles.inputContainer}>
      {label && <span className={styles.before} style={beforeStyle}>{label}</span>}
      <input
        defaultValue={defaultValue}
        type={type}
        className={styles.input}
        ref={inputRef}
        onFocus={handleFocus}
        onBlur={handleBlur}
        name={name}
        onChange={onChange ? (e) => onChange(e) : undefined}
      />
      {error && <span className={styles.after}>{error}</span>}
    </div>
  );
};

export default Index;