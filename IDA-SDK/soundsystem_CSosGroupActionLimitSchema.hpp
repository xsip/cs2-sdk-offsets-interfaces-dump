#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class soundsystem_CSosGroupActionLimitSchema {
    char pad_545[0x8];
    int32_t m_nMaxCount;
    soundsystem_SosActionStopType_t m_nStopType;
    soundsystem_SosActionLimitSortType_t m_nSortType;
    bool m_bStopImmediate;
    bool m_bCountStopped;
    char end_pad_544[0x2];
};
