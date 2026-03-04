#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class particles_CRandomNumberGeneratorParameters {
    bool m_bDistributeEvenly;
    char pad_729[0x3];
    int32_t m_nSeed;
};
