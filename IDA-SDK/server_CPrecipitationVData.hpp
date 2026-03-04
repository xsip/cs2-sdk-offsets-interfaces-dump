#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class server_CPrecipitationVData {
    char pad_1546[0x28];
    char m_szParticlePrecipitationEffect[0xe0];
    float32 m_flInnerDistance;
    animationsystem_ParticleAttachment_t m_nAttachType;
    bool m_bBatchSameVolumeType;
    char pad_4079[0x3];
    int32_t m_nRTEnvCP;
    int32_t m_nRTEnvCPComponent;
    char pad_4080[0x4];
    CUtlString m_szModifier;
};
