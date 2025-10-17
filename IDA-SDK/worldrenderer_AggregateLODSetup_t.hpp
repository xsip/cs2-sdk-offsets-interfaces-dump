#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class worldrenderer_AggregateLODSetup_t {
    Vector m_vLODOrigin;
    float32 m_fMaxObjectScale;
    char m_fSwitchDistances[0x18];
};
