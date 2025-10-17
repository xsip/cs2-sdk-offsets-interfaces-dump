#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class animlib_CNmSyncTrack {
    char m_syncEvents[0xa8];
    int32_t m_nStartEventOffset;
    char end_pad_1772[0x4];
};
