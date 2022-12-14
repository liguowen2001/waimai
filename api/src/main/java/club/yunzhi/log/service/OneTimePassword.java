package club.yunzhi.log.service;

import java.util.Optional;

/**
 * 一次性密码.
 */
public interface OneTimePassword {

  /**
   * 获取计算完后的结果
   *
   * @return
   */
  Optional<String> getPassword();
}
