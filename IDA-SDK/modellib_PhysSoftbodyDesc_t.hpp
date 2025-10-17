#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class modellib_PhysSoftbodyDesc_t {
    char m_ParticleBoneHash[0x18];
    char m_Particles[0x18];
    char m_Springs[0x18];
    char m_Capsules[0x18];
    char m_InitPose[0x18];
    char m_ParticleBoneName[0x18];
};
