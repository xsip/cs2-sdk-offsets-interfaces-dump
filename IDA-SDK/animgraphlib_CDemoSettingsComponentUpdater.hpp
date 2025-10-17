#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "modellib_AnimComponentID.hpp"
#include "animgraphlib_CAnimDemoCaptureSettings.hpp"

class animgraphlib_CDemoSettingsComponentUpdater {
    char vTable10[0x18];
    CUtlString m_name;
    modellib_AnimComponentID m_id;
    animgraphlib_AnimNodeNetworkMode m_networkMode;
    bool m_bStartEnabled;
    char end_pad_11[0x7];
    animgraphlib_CAnimDemoCaptureSettings m_settings;
};
