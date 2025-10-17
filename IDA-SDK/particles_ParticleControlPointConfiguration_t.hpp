#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "particles_ParticlePreviewState_t.hpp"

class particles_ParticleControlPointConfiguration_t {
    CUtlString m_name;
    char m_drivers[0x18];
    particles_ParticlePreviewState_t m_previewState;
};
