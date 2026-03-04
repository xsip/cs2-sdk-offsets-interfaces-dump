#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "client_ExternalAnimGraphHandle_t.hpp"

class client_CCS2ChickenGraphController {
    void **__vftable_0;
    void **__vftable_1;
    void **__vftable_2;
    client_ExternalAnimGraphHandle_t m_hExternalGraph;
    char pad_1400[0x74];
    char m_action[0x18];
    char m_actionSubtype[0x18];
    CAnimGraph2ParamAutoResetOptionalRef m_bActionReset;
    char m_idleVariation[0x18];
    char m_runVariation[0x18];
    char m_panicVariation[0x18];
    char m_squatVariation[0x18];
    char m_bInWater[0x18];
    bool m_bHasActionCompletedEvent;
    bool m_bWaitingForCompletedEvent;
    char end_pad_1581[0x6];
};
