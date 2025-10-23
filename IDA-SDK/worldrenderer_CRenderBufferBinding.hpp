#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class worldrenderer_CRenderBufferBinding {
    uint64_t m_hBuffer;
    char pad_2483[0x8];
    uint32_t m_nBindOffsetBytes;
    char pad_2484[0xc];
};
