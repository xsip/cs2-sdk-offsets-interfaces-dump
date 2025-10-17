#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class CDecalGroupVData {
    char m_vecOptions[0x18];
    float32 m_flTotalProbability;
    char end_pad_340[0x4];
};
