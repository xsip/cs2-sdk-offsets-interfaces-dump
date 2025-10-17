#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class rendersystemdx11_RsRasterizerStateDesc_t {
    rendersystemdx11_RsFillMode_t m_nFillMode;
    rendersystemdx11_RsCullMode_t m_nCullMode;
    bool m_bDepthClipEnable;
    bool m_bMultisampleEnable;
    int32_t m_nDepthBias;
    float32 m_flDepthBiasClamp;
    float32 m_flSlopeScaledDepthBias;
};
