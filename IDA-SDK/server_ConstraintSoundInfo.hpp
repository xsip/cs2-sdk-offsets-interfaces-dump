#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "server_VelocitySampler.hpp"
#include "server_SimpleConstraintSoundProfile.hpp"

class server_ConstraintSoundInfo {
    char vTable3845[0x8];
    server_VelocitySampler m_vSampler;
    char pad_3846[0x4];
    server_SimpleConstraintSoundProfile m_soundProfile;
    Vector m_forwardAxis;
    char pad_3847[0x4];
    CUtlSymbolLarge m_iszTravelSoundFwd;
    CUtlSymbolLarge m_iszTravelSoundBack;
    char pad_3848[0x18];
    CUtlSymbolLarge m_iszReversalSounds[3];
    bool m_bPlayTravelSound;
    bool m_bPlayReversalSound;
    char pad_3849[0x6];
};
