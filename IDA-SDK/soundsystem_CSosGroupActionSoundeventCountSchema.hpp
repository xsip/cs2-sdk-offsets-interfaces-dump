#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class soundsystem_CSosGroupActionSoundeventCountSchema {
    char pad_545[0x8];
    bool m_bExcludeStoppedSounds;
    char pad_550[0x7];
    CUtlString m_strCountKeyName;
};
