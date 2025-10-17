#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class rendersystemdx11_RsBlendStateDesc_t {
    uint32_t m_srcBlendBits;
    uint32_t m_destBlendBits;
    uint32_t m_srcBlendAlphaBits;
    uint32_t m_destBlendAlphaBits;
    uint32_t m_renderTargetWriteMaskBits;
    char pad_4191[0x4];
    uint32_t m_blendOpAlphaBits;
    uint8_t m_blendEnableBits;
    uint8_t m_srgbWriteEnableBits;
    char end_pad_4192[0x2];
};
