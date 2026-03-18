#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class soundsystem_CSosGroupActionSoundeventCountSchema {
    char pad_555[0x8];
    bool m_bExcludeStoppedSounds;
    char pad_560[0x7];
    CUtlString m_strCountKeyName;
};
