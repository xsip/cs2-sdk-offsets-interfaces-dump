#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class animgraphlib_CAnimGraphDebugReplay {
    char vTable27[0x40];
    CUtlString m_animGraphFileName;
    char m_frameList[0x18];
    int32_t m_startIndex;
    int32_t m_writeIndex;
    int32_t m_frameCount;
    char end_pad_28[0x4];
};
