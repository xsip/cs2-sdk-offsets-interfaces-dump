#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class particles_ParticleChildrenInfo_t {
    char m_ChildRef[0x8];
    float32 m_flDelay;
    bool m_bEndCap;
    bool m_bDisableChild;
    char pad_2353[0x2];
    particles_ParticleDetailLevel_t m_nDetailLevel;
    char end_pad_2354[0xc];
};
