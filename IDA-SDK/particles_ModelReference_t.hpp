#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class particles_ModelReference_t {
    char m_model[0x8];
    float32 m_flRelativeProbabilityOfSpawn;
    char end_pad_2352[0x4];
};
