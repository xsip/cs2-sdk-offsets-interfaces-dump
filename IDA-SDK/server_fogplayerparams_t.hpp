#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class server_fogplayerparams_t {
    char vTable4153[0x8];
    char m_hCtrl[0x4];
    float32 m_flTransitionTime;
    Color m_OldColor;
    float32 m_flOldStart;
    float32 m_flOldEnd;
    float32 m_flOldMaxDensity;
    float32 m_flOldHDRColorScale;
    float32 m_flOldFarZ;
    Color m_NewColor;
    float32 m_flNewStart;
    float32 m_flNewEnd;
    float32 m_flNewMaxDensity;
    float32 m_flNewHDRColorScale;
    float32 m_flNewFarZ;
};
