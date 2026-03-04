#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "particleslib_CPerParticleVecInput.hpp"

class particles_CPAssignment_t {
    int32_t m_nCPNumber;
    char pad_701[0x4];
    particleslib_CPerParticleVecInput m_Pos;
    particles_ParticleOrientationSetMode_t m_nOrientationMode;
    char end_pad_702[0x4];
};
