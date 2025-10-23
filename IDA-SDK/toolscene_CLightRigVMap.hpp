#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class toolscene_CLightRigVMap {
    char m_MapName[0xe0];
    bool m_bRender3DSkybox;
    bool m_bParticlesTraceAgainstMap;
    char pad_2526[0x6];
};
