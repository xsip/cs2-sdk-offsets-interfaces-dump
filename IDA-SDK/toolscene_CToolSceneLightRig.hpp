#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "toolscene_CLightRigBackground.hpp"
#include "toolscene_CLightRigGrid.hpp"
#include "toolscene_CLightRigExposure.hpp"
#include "toolscene_CLightRigPostProcessing.hpp"
#include "toolscene_CLightRigSky.hpp"
#include "toolscene_CLightRigVMap.hpp"

class toolscene_CToolSceneLightRig {
    char vTable2523[0x8];
    toolscene_LightRigType_t m_nRigType;
    char pad_2524[0x4];
    char m_Suns[0x18];
    char m_PointLights[0x18];
    char m_SpotLights[0x18];
    toolscene_CLightRigBackground m_Background;
    toolscene_CLightRigGrid m_Grid;
    char pad_2525[0x2];
    toolscene_CLightRigExposure m_Exposure;
    toolscene_CLightRigPostProcessing m_PostProcessing;
    toolscene_CLightRigSky m_Sky;
    toolscene_CLightRigVMap m_BackgroundMap;
};
