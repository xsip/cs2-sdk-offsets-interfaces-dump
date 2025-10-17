#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class soundsystem_CSosGroupActionSoundeventMinMaxValuesSchema {
    char pad_545[0x8];
    CUtlString m_strQueryPublicFieldName;
    CUtlString m_strDelayPublicFieldName;
    bool m_bExcludeStoppedSounds;
    bool m_bExcludeDelayedSounds;
    bool m_bExcludeSoundsBelowThreshold;
    char pad_551[0x1];
    float32 m_flExcludeSoundsMinThresholdValue;
    bool m_bExcludSoundsAboveThreshold;
    char pad_552[0x3];
    float32 m_flExcludeSoundsMaxThresholdValue;
    CUtlString m_strMinValueName;
    CUtlString m_strMaxValueName;
    char end_pad_553[0x8];
};
