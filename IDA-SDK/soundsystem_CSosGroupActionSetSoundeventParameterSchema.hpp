#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class soundsystem_CSosGroupActionSetSoundeventParameterSchema {
    char pad_556[0x8];
    int32_t m_nMaxCount;
    float32 m_flMinValue;
    float32 m_flMaxValue;
    char pad_558[0x4];
    CUtlString m_opvarName;
    soundsystem_SosActionSetParamSortType_t m_nSortType;
    char end_pad_559[0x4];
};
