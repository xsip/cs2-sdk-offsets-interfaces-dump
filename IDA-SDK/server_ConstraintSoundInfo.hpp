#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "server_VelocitySampler.hpp"
#include "server_SimpleConstraintSoundProfile.hpp"

class server_ConstraintSoundInfo {
    void **__vftable_0;
    server_VelocitySampler m_vSampler;
    char pad_3977[0x4];
    server_SimpleConstraintSoundProfile m_soundProfile;
    Vector m_forwardAxis;
    char pad_3978[0x4];
    CUtlSymbolLarge m_iszTravelSoundFwd;
    CUtlSymbolLarge m_iszTravelSoundBack;
    char pad_3979[0x18];
    CUtlSymbolLarge m_iszReversalSoundSmall;
    CUtlSymbolLarge m_iszReversalSoundMedium;
    CUtlSymbolLarge m_iszReversalSoundLarge;
    bool m_bPlayTravelSound;
    bool m_bPlayReversalSound;
    char pad_3980[0x6];
};
