#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class animgraphlib_CPoseHandle {
    uint16_t m_nIndex;
    animgraphlib_PoseType_t m_eType;
    char end_pad_204[0x1];
};
