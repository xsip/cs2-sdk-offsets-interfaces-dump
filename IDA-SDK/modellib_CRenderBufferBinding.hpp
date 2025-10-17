#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class modellib_CRenderBufferBinding {
    uint64_t m_hBuffer;
    char pad_355[0x8];
    uint32_t m_nBindOffsetBytes;
    char end_pad_356[0xc];
};
